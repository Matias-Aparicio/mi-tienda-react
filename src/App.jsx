import React from 'react';
import Layout from './components/Layout';
import ItemListContainer from './components/ItemListContainer';
import ProductForm from './components/ProductForm';

export default function App() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <ItemListContainer />
        <ProductForm />
      </div>
    </Layout>
  );
}