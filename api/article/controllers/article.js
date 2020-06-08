const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    const {user} = ctx.state;
    const entity = await strapi.services.article.create({
      ...ctx.request.body,
      user: user.id,
      createdAt: Date.now(),
    });
    return sanitizeEntity(entity, { model: strapi.models.article });
  },

  async update(ctx) {
    const { id } = ctx.params;
    const { user } = ctx.state;

    const entity = await strapi.services.article.update({ id, user: user.id }, {
      ...ctx.request.body,
      user: user.id,
      updatedAt: Date.now(),
    });

    return sanitizeEntity(entity, { model: strapi.models.article });
  },
};
