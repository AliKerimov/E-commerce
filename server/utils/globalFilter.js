class globalFilter {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    filter() {
        //Filter
        const queryStr = { ...this.queryStr };

        const restrictedFields = ["sort", "page", "limit", "fields"];

        restrictedFields.forEach((el) => delete queryStr[el]);
        let tempoQueryStr = JSON.stringify(queryStr);
        tempoQueryStr = tempoQueryStr.replace(
            /\b(gt|gte|lt|lte)\b/g,
            (atomic) => `$${atomic}`
        );
        // console.log(tempoQueryStr);
        // console.log(queryStr);
        this.query.find(JSON.parse(tempoQueryStr));
        return this;
    }
    // filterCateg() {
    //     //Filter
    //     let filter={};
    //     if(this.query.categories){
    //         filter={categories:this.query.categories.split(',')}
    //     }
    //     this.query.find(filter)
    //     // const queryStr = { ...this.queryStr };

    //     // const restrictedFields = ["sort", "page", "limit", "fields"];

    //     // restrictedFields.forEach((el) => delete queryStr[el]);
    //     // let tempoQueryStr = JSON.stringify(queryStr);
    //     // tempoQueryStr = tempoQueryStr.replace(
    //     //     /\b(gt|gte|lt|lte)\b/g,
    //     //     (atomic) => `$${atomic}`
    //     // );
    //     // // console.log(tempoQueryStr);
    //     // // console.log(queryStr);
    //     // console.log(tempoQueryStr);
    //     // this.query.find({ dim_cm: { $all: JSON.parse(tempoQueryStr) } });
    //     // // console.log(this);
    //     // return this;
    // }
    sort(){
        //Sorting
        if(this.queryStr.sort){
            const sortQuery=this.queryStr.sort.split(',').join(' ');
            this.query.sort(sortQuery)
        }else{
            this.query.sort('-createdAt')
        }
        return this;
    }
    fields(){
        //Fields
    if(this.queryStr.fields){
        const fieldsQuery=this.queryStr.fields.split(',').join(' ');
        this.query.select(fieldsQuery)
    }
    return this;

    }
    pagination(){
         //Pagination
    const page=(this.queryStr.page) || 1;
    const limit=(this.queryStr.limit) || 20;
    const skip=(page-1)*limit
    this.query.skip(skip).limit(limit);
    return this;
    }
}
module.exports = globalFilter;