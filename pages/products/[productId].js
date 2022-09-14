import { useRouter } from 'next/router'

const Products = () => {
    const router = useRouter()
    const slug = router.query
    return (
        <>
            <h1>Product detail</h1>
            <p>Product: {slug.productId}</p>
        </>
    )
}

export default Products
