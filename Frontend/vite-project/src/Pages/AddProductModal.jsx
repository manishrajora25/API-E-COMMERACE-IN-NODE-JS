import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Instance from '../Axios.js';


const AddProductModal = ({ close }) => {
  const [form, setForm] = useState({
    name: '',
    slug: '',
    category: '',
    quantity: '',
    originalPrice: '',
    discountedPrice: '',
    description: '',
    image: null,
    attributes: [{ key: '', value: '' }],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleAttrChange = (index, field, value) => {
    const updatedAttrs = [...form.attributes];
    updatedAttrs[index][field] = value;
    setForm((prev) => ({ ...prev, attributes: updatedAttrs }));
  };

//   const addAttribute = () => {
//     setForm((prev) => ({
//       ...prev,
//       attributes: [...prev.attributes, { key: '', value: '' }],
//     }));
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const data = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (key === 'attributes') {
          data.append('attributes', JSON.stringify(value));
        } else {
          data.append(key, value);
        }
      });
  
      const res = await Instance.post('/product/add', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });
  
      toast.success('Product added successfully!');
      setForm({ // <-- Reset here
        name: '',
        slug: '',
        category: '',
        quantity: '',
        originalPrice: '',
        discountedPrice: '',
        description: '',
        image: null,
        attributes: [{ key: '', value: '' }],
      });
      close(); // Then close the modal
      console.log(res.data);
      
    } catch (error) {
      console.error(error);
    //   toast.error('Failed to add product');
    }
  };
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[500px] max-h-[90vh] overflow-y-auto shadow-2xl">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "slug", "category", "quantity", "originalPrice", "discountedPrice", "description"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
              required={field !== "description"} // adjust required logic if needed
            />
          ))}

          {/* Image upload */}
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
            required
          />

          {/* Attributes */}
          <h3 className="font-semibold mt-4">Attributes</h3>
          {form.attributes.map((attr, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Key"
                value={attr.key}
                onChange={(e) => handleAttrChange(index, "key", e.target.value)}
                className="w-1/2 border px-2 py-1 rounded"
              />
              <input
                type="text"
                placeholder="Value"
                value={attr.value}
                onChange={(e) => handleAttrChange(index, "value", e.target.value)}
                className="w-1/2 border px-2 py-1 rounded"
              />
            </div>
          ))}
          {/* <button
            type="button"
            onClick={addAttribute}
            className="text-sm text-blue-600 underline"
          >
            + Add Attribute
          </button> */}

          {/* Buttons */}
          <div className="flex justify-end mt-4 gap-2">
            <button
              type="button"
              onClick={close}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
