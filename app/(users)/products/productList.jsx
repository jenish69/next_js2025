"use client";

import { useSearchParams } from "next/navigation";

const ProductList = () => {
    const searchParam = useSearchParams();

    const category = searchParam.get("categories");
    const sort = searchParam.get("sort");
    const pages = searchParam.getAll("page");

    return (
        <h1>cate={category}, sort={sort}, pages={pages}</h1>
    );
}

export default ProductList;