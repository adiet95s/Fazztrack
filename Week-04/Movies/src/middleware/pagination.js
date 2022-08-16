module.exports =
function paginate(model) {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      console.log(page);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const result = {};
  // change model.length to model.countDocuments() because you are counting directly from mongodb
      if (endIndex < model.length) {
        result.next = {
          page: page + 1,
          limit: limit,
        };
      }
      if (startIndex > 0) {
        result.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      result.result = model.slice(startIndex, endIndex);
      res.paginatedResult = result
      console.log(result, 'dari page');
      return result
}