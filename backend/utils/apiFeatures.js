class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: 'i',
          },
        }
      : {};

    // const category = this.queryStr.category
    // //   ? { category: { $regex: this.queryStr.category, $options: 'i' } }
    //   : {};

    this.query = this.query.find({ ...keyword });
    // this.query = this.query.find({ ...category });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    console.log(queryCopy);
    //Removing fields from the query
    const removeFields = ['keyword', 'limit', 'page'];
    removeFields.forEach((el) => delete queryCopy[el]);
    console.log(queryCopy);
    //* Advance Filter for price rating
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    console.log(queryCopy);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

module.exports = APIFeatures;
