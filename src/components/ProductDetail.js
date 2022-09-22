/* This example requires Tailwind CSS v2.0+ */
import React, { Component } from 'react'
import { PaperClipIcon } from '@heroicons/react/outline'
import Products from './Products'
import { products } from './Products'

import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function ProductDetail(props) {

    const [product, setProduct] = useState(products);


    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">

            {products.slice(0, 1).map((product) => (



                <div key={product.id} className="group relative">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Product detail</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">{product.name} </p>
                    </div>
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{product.name}</dd>
                        </div>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Price</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{product.price}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Color</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{product.color}</dd>
                    </div>
                </div>



            ))}

        </div>
    )
}
