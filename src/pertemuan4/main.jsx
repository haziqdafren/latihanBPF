import { createRoot } from 'react-dom/client';
import "./tailwind.css";
import FrameworkList from "./FrameworkList";
import FrameworkListSeachFilter from "./FrameworkListSearchFilter"
import ResponsiveTest from './ResponsiveTest';
import ProductList from './ProductList'

createRoot(document.getElementById("root")).render(
    <div>
       {/* <FrameworkList/> */}
       {/* <FrameworkListSeachFilter/> */}
       {/* <ResponsiveTest/> */}
       <ProductList/>
    </div>
)