import React from 'react';
import fs from "fs/promises";
import path from "path";

const ProductDetailsPage = (props) => {
    const { loadedProduct } = props;

    if (!loadedProduct) {
        return <p>Loading..</p>
    }

    return (
        <>
            <h1>{loadedProduct?.title}</h1>
            <p>{loadedProduct?.description}</p>
        </>
    )
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    return data
}

export const getStaticProps = async (context) => {
    const { params } = context;
    // console.log("params", params);
    // console.log("context", context);

    const productId = params?.productDeatils;
    const data = await getData();
    const product = data.products.find(product => product.id === productId);

    if (!product) {
        return { notFound: true }
    }

    return {
        props: {
            loadedProduct: product
        }
    }

}

export async function getStaticPaths() {
    const data = await getData();
    const ids = data.products.map(product => product.id);
    const pathsWithParams = ids.map(id => ({ params: { productDeatils: id } }))
    return {
        // paths: [
        //     {
        //         params: { productDeatils: 'p1' }
        //     },
        // ],
        // fallback: true // this will give data output just in time when clicked on link, while only in paths array is pre-rendered

        // // fallback: 'blocking' // this will give data output those are not mention in paths array, but if request take time, then there is blank page untill the request from data would return

        // // fallback: false // it will give error, if any data other than in paths are rendered

        paths: pathsWithParams,
        fallback: true
    }
}

export default ProductDetailsPage