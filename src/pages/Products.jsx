import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { BsFillExclamationDiamondFill } from "react-icons/bs"
import PageHeader from "../components/PageHeader"

export default function Products() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [query, setQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10
    const breadcrumb = ["Dashboard", "Product List"]

    useEffect(() => {
        const timeout = setTimeout(() => {
            axios
                .get(`https://dummyjson.com/products/search?q=${query}`)
                .then((response) => {
                    if (response.status !== 200) {
                        setError(response.data.message);
                        return;
                    }
                    setProducts(response.data.products)
                })
                .catch((err) => {
                    setError(err.message || "An unknown error occurred");
                });
        }, 500); // 500ms debounce

        return () => clearTimeout(timeout); // cleanup
    }, [query]); // useEffect akan dipanggil ulang setiap `query` berubah

    // Reset to first page when search query changes
    useEffect(() => {
        setCurrentPage(1)
    }, [query])

    const errorInfo = error ? (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
            <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
            {error}
        </div>
    ) : null

    // Calculate pagination
    const totalPages = Math.ceil(products.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentProducts = products.slice(startIndex, endIndex)

    // Pagination handlers
    const goToPage = (page) => {
        setCurrentPage(page)
    }

    const goToPrevious = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1))
    }

    const goToNext = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages))
    }

    // Generate page numbers for pagination
    const getPageNumbers = () => {
        const pages = []
        const maxVisiblePages = 5
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i)
                }
                pages.push('...')
                pages.push(totalPages)
            } else if (currentPage >= totalPages - 2) {
                pages.push(1)
                pages.push('...')
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i)
                }
            } else {
                pages.push(1)
                pages.push('...')
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i)
                }
                pages.push('...')
                pages.push(totalPages)
            }
        }
        
        return pages
    }

    return (
        <div className="space-y-6">
            <PageHeader title="Products" breadcrumb={breadcrumb} />
            
            {errorInfo}

            {/* Search Input */}
            <div className="w-full">
                <input 
                    type="text" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="Cari nama produk..." 
                    className="w-full p-3 bg-white border border-gray-300 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" 
                />
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-emerald-600 text-white text-left text-sm font-semibold">
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Vendor</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
                        {currentProducts.map((item, index) => (
                            <tr
                                key={item.id}
                                className="hover:bg-gray-50 transition-colors duration-200"
                            >
                                <td className="px-6 py-4 font-medium text-gray-700">
                                    {startIndex + index + 1}.
                                </td>
                                <td className="px-6 py-4">
                                    <Link to={`/products/${item.id}`} className="text-emerald-400 hover:text-emerald-500">
                                        {item.title}
                                    </Link>
                                </td>
                                <td className="px-6 py-4">{item.category}</td>
                                <td className="px-6 py-4">$ {item.price}</td>
                                <td className="px-6 py-4">{item.brand}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                        {/* Results info */}
                        <div className="text-sm text-gray-700">
                            Showing {startIndex + 1} to {Math.min(endIndex, products.length)} of {products.length} results
                        </div>

                        {/* Pagination controls */}
                        <div className="flex items-center space-x-1">
                            {/* Previous button */}
                            <button
                                onClick={goToPrevious}
                                disabled={currentPage === 1}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    currentPage === 1
                                        ? 'text-gray-400 cursor-not-allowed'
                                        : 'text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Previous
                            </button>

                            {/* Page numbers */}
                            {getPageNumbers().map((page, index) => (
                                <button
                                    key={index}
                                    onClick={() => page !== '...' && goToPage(page)}
                                    disabled={page === '...'}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                        page === currentPage
                                            ? 'bg-emerald-600 text-white'
                                            : page === '...'
                                            ? 'text-gray-400 cursor-default'
                                            : 'text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}

                            {/* Next button */}
                            <button
                                onClick={goToNext}
                                disabled={currentPage === totalPages}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    currentPage === totalPages
                                        ? 'text-gray-400 cursor-not-allowed'
                                        : 'text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}