const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    const {user} = ctx.state;
    const entity = await strapi.services.comment.create({
      ...ctx.request.body,
      user: user.id,
      createdAt: Date.now(),
      updatedAt: null,
    });
    return sanitizeEntity(entity, { model: strapi.models.comment });
  },

  async update(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    const entity = await strapi.services.comment.update({ id, user: user.id }, {
      ...ctx.request.body,
      updatedAt: Date.now(),
      user: user.id,
    });

    return sanitizeEntity(entity, { model: strapi.models.comment });
  },
};
