import { List } from "../../components/List";
import { useProducts } from "./use-products";

export const ProductsList = () => {
    const [products, { status, error }] = useProducts();

    return (
        <>
            {error && <h2>Can't fetch data</h2>}
            {status === "loading" && <h2>Loading...</h2>}

            {status === "received" && (
                <List>
                    {products.map((p) => {
                        return <div>{p.title}</div>;
                    })}
                </List>
            )}
        </>
    );
};
