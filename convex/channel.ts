import { v } from 'convex/values';
import { query } from './_generated/server';
import { getAuthUserId } from '@convex-dev/auth/server';

export const getAllChannels = query({
  args: { id: v.id('workspaces') },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);

    if (!userId) {
      throw new Error('UN-Authorized User');
    }

    const channels = await ctx.db
      .query('channels')
      .withIndex('by_workspace_id', (q) => q.eq('workspaceId', args.id))
      .collect();

    return channels;
  },
});
