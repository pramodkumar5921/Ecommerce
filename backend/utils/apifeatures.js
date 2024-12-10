class ApiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword? {
            name:{
                $regex:this.queryStr.keyword,
                $options: "i", // i is used here because of case insensetive search.
            },
        }:{};
        this.query = this.query.find({...keyword});
        return this;
    }

    filter() {
        const queryCopy = { ...this.queryStr };
        const removeFields = ["keyword", "page", "limit"];  // Ensure correct case here
        removeFields.forEach((key) => delete queryCopy[key]);

        this.query = this.query.find(queryCopy);
        return this;
    
    }
    
};

module.exports = ApiFeatures;