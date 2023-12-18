
const productsModel = require('../../models/products/productsModel');

const getAllProducts = async (req, res) => {

    const { company, name, featured, sort, select, page, limit } = req.query;

    const queryObject = {}
    
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if (featured) {
        queryObject.featured = featured;
    }
    let apiProductData = productsModel.find(queryObject);

    if (sort) {
        let sortFix = sort.split(',').join(' ');
        apiProductData = apiProductData.sort(sortFix)
    }

    if (select) {
        let selectFix = select.split(',').join(' ');
        apiProductData = apiProductData.select(selectFix)
    }

    if (page || limit) {
        let pageNo = page || 1;
        let pageLimit = limit || 10;
        let skipItem = (pageNo - 1) * pageLimit;
        apiProductData = apiProductData.skip(skipItem).limit(pageLimit);
        console.log('pageNo', pageNo, page, 'pageLimit', pageLimit, limit, 'skipItem', skipItem)
    }

    console.log(queryObject)

    try {
        const allProducts = await apiProductData;
        if (allProducts.length === 0) {
            return res.status(400).json(
                { message: "products not available" }
            );
        }

        res.status(200).json({ allProducts, nbHits: allProducts.length })
    }
    catch (error) {
        res.status(500).json(
            { error: "internal server error!" }
        );
    }
}



const getAllProductsTesting = async (req, res) => {

    const { company, name, featured, sort, select, page, limit } = req.query;
    
    const queryObject = {}
    
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if (featured) {
        queryObject.featured = featured;
    }
    let apiProductData = productsModel.find(queryObject);

    if (sort) {
        let sortFix = sort.split(',').join(' ');
        apiProductData = apiProductData.sort(sortFix)
    }

    if (select) {
        let selectFix = select.split(',').join(' ');
        apiProductData = apiProductData.select(selectFix)
    }

    if (page || limit) {
        let pageNo = page || 1;
        let pageLimit = limit || 5;
        let skipItem = (pageNo - 1) * pageLimit;
        apiProductData = apiProductData.skip(skipItem).limit(pageLimit);
        console.log('pageNo', pageNo, page, 'pageLimit', pageLimit, limit, 'skipItem', skipItem)
    }

    console.log(queryObject)

    try {
        const allProducts = await apiProductData;
        if (allProducts.length === 0) {
            return res.status(400).json(
                { message: "testing products not available" }
                );
        }
        
        res.status(200).json({ allProducts, nbHits: allProducts.length })
    }
    catch (error) {
        res.status(500).json(
            { error: "internal server error!" }
        );
    }
}

module.exports = { getAllProducts, getAllProductsTesting }