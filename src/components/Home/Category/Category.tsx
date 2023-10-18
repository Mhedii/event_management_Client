// "use client";
import { Content } from "antd/es/layout/layout";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div>
      <Content style={{ marginLeft: "4rem", marginRight: "4rem" }}>
        <CategoryCard />
      </Content>
    </div>
  );
};

export default Category;
