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
};

module.exports = ApiFeatures;