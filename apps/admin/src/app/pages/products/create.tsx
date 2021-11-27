import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { useGet_Producer_By_TitleLazyQuery, useInsertProductMutation, useListProducersQuery } from '../../generated/graphql';
import TextInput from '../../components/ui/form/TextInput';
import SelectInput from '../../components/ui/form/SelectInput';
import SwitchInput from '../../components/ui/form/SwitchInput';
import TextAreaInput from '../../components/ui/form/TextareaInput';
import Notification from '../../components/ui/Notification';
import _  from 'lodash';
const Content = styled.div``;

export const CreateProduct = () => {
  const [notification, setNotification] = useState({
    title: '',
    message: '',
    type: ''
  });
  const [toggle, setToggle] = useState(false);
  const [producerList, setProducerList] = useState([] as any[]);

  const [insertProductMutation, { data, loading, error }] = useInsertProductMutation();
  const [getProducerByTitle ,{data: producerData}] = useGet_Producer_By_TitleLazyQuery();


  const handleQuery = (values: any, resetForm: any) => {

    insertProductMutation({
      variables:{
        payload:{
          title: values.title,
          alias: values.title.toString().toLowerCase().replace(/ /g, '-'),
          sku: values.sku,
          price: values.price,
          measure_unit: values.measure_unit,
          quantity: values.quantity,
          description: values.description,
          thumbnail: values.thumbnail,
          producer_id: values.producer_id,
          packing_type: values.packing_type,
          quote_on_call: toggle

        }
      }

    }).then((res: any) => {
      setNotification({
        title: 'Generated Successfully',
        message: 'New Product created successfully.',
        type: 'success',
      })
      resetForm();
      window.location.href = "/products"
    })
    .catch((err: any) => {
      resetForm();
      setNotification({
        title: 'Generated Failed',
        message: 'New Product created failed.',
        type: 'error',
      })
      console.log(err);
    });
    setTimeout(() => {
      setNotification({
        title: '',
        message: '',
        type: '',
      })
    }, 3000);
  };
  const productData  = [
    {
      "producer": "Araç Ailesi",
      "product_name": "Ayva",
      "quantity": 1,
      "unit": "kg",
      "packing": "kesekağıdı",
      "price": 12,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Kuru Soğan (küçük boy baş)",
      "quantity": 1,
      "unit": "kg",
      "packing": "kesekağıdı",
      "price": 8,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Soyulmuş Tatlı kabağı",
      "quantity": 1,
      "unit": "kg",
      "packing": "kesekağıdı",
      "price": 10,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Yaprak Sarması (Toprak Güveçte Pişmiş, Kunduru Bulgurundan)",
      "quantity": 1,
      "unit": "kg",
      "packing": "paket",
      "price": 65,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Yaprak Sarması (Çiğ, Kunduru bulgurundan)",
      "quantity": 1,
      "unit": "kg",
      "packing": "paket",
      "price": 65,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Kunduru Tam Buğday Unu",
      "quantity": 1,
      "unit": "kg",
      "packing": "bez torba",
      "price": 12,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Kara Sarımsak",
      "quantity": 1,
      "unit": "kg",
      "packing": "kesekağıdı",
      "price": 50,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Dolma Biber kurusu",
      "quantity": 20,
      "unit": "adet",
      "packing": "dizge",
      "price": 18,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Kekik Kurusu",
      "quantity": 50,
      "unit": "gr",
      "packing": "paket",
      "price": 10,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Isırgan Kurusu,",
      "quantity": 100,
      "unit": "gr",
      "packing": "paket",
      "price": 20,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Papatya Kurusu",
      "quantity": 50,
      "unit": "gr",
      "packing": "paket",
      "price": 20,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Madımak Kurusu",
      "quantity": 50,
      "unit": "gr",
      "packing": "paket",
      "price": 10,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Dağ Adaçayı",
      "quantity": 50,
      "unit": "gr",
      "packing": "paket",
      "price": 15,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Sumak (öğütülmüş)",
      "quantity": 100,
      "unit": "gr",
      "packing": "paket",
      "price": 20,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Domates Salçası",
      "quantity": 660,
      "unit": "ml",
      "packing": "cam kavanoz",
      "price": 25,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Cevizli Ayva Reçeli",
      "quantity": 425,
      "unit": "ml",
      "packing": "cam kavanoz",
      "price": 25,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Ayva Reçeli",
      "quantity": 425,
      "unit": "ml",
      "packing": "cam kavanoz",
      "price": 25,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Ayva Reçeli",
      "quantity": 600,
      "unit": "ml",
      "packing": "cam kavanoz",
      "price": 30,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Erişte - Kunduru Buğdayından",
      "quantity": 1,
      "unit": "kg",
      "packing": "bez torba",
      "price": 40,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Arpa Tarhanası - Kunduru Buğdayı ve arpa unundan",
      "quantity": 1,
      "unit": "kg",
      "packing": "bez torba",
      "price": 40,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Araç Ailesi",
      "product_name": "Ekşi Erik Pestili",
      "quantity": 200,
      "unit": "gr",
      "packing": "tabaka",
      "price": 25,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Rahime Çevik",
      "product_name": "Kuru Nane",
      "quantity": 20,
      "unit": "gr",
      "packing": "paket",
      "price": 3,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Rahime Çevik",
      "product_name": "Elma Kurusu",
      "quantity": 1,
      "unit": "kg",
      "packing": "paket",
      "price": 40,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Rahime Çevik",
      "product_name": "Karışık Turşu",
      "quantity": 1000,
      "unit": "ml",
      "packing": "cam kavanoz",
      "price": 20,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Rahime Çevik",
      "product_name": "Domates Kurusu",
      "quantity": 100,
      "unit": "gr",
      "packing": "paket",
      "price": 10,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Rahime Çevik",
      "product_name": "Dağ Adaçayı",
      "quantity": 50,
      "unit": "gr",
      "packing": "paket",
      "price": 15,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Rahime Çevik",
      "product_name": "Kahvaltılık ezme",
      "quantity": 660,
      "unit": "ml",
      "packing": "cam kavanoz",
      "price": 40,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Rahime Çevik",
      "product_name": "Melemenlik sos",
      "quantity": 660,
      "unit": "ml",
      "packing": "cam kavanoz",
      "price": 19,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Rahime Çevik",
      "product_name": "Acılı Sos",
      "quantity": 660,
      "unit": "ml",
      "packing": "cam kavanoz",
      "price": 30,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Rahime Çevik",
      "product_name": "Kuşburnu Marmelatı",
      "quantity": 660,
      "unit": "ml",
      "packing": "cam kavanoz",
      "price": 40,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Akyüz Ailesi",
      "product_name": "Süt (dondurulmuş)",
      "quantity": 5,
      "unit": "lt",
      "packing": "pet şişe",
      "price": 30,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Akyüz Ailesi",
      "product_name": "Süt (dondurulmuş)",
      "quantity": 3,
      "unit": "lt",
      "packing": "pet şişe",
      "price": 20,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Akyüz Ailesi",
      "product_name": "Süzme Yoğurt",
      "quantity": 1,
      "unit": "kg",
      "packing": "poşet",
      "price": 35,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Akyüz Ailesi",
      "product_name": "Köy Horozu, 1200 - 1500 gr",
      "quantity": 1,
      "unit": "adet",
      "packing": "",
      "price": 70,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Akyüz Ailesi",
      "product_name": "Köy Tavuğu, 1200 - 1500 gr",
      "quantity": 1,
      "unit": "adet",
      "packing": "",
      "price": 70,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Akyüz Ailesi",
      "product_name": "Ayva",
      "quantity": 1,
      "unit": "kg",
      "packing": "kese kağıdı",
      "price": 12,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Arslan Ailesi",
      "product_name": "Köy Ekmeği (Bazlama 200 - 250 gr)",
      "quantity": 1,
      "unit": "adet",
      "packing": "kağıt ambalaj",
      "price": 6,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Arslan Ailesi",
      "product_name": "Gözleme",
      "quantity": 1,
      "unit": "adet",
      "packing": "kağıt ambalaj",
      "price": 12,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Arslan Ailesi",
      "product_name": "Köy Çöreği, Nane, Yumurta, Pul Biber 400 gr",
      "quantity": 1,
      "unit": "adet",
      "packing": "kağıt ambalaj",
      "price": 15,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Arslan Ailesi",
      "product_name": "Domates",
      "quantity": 1,
      "unit": "kg",
      "packing": "kese kağıdı",
      "price": 12,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Arslan Ailesi",
      "product_name": "Kış Elması Kırmızı",
      "quantity": 1,
      "unit": "kg",
      "packing": "kese kağıdı",
      "price": 12,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Arslan Ailesi",
      "product_name": "Ayva",
      "quantity": 1,
      "unit": "kg",
      "packing": "kese kağıdı",
      "price": 12,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Arslan Ailesi",
      "product_name": "Çeri Domates",
      "quantity": 600,
      "unit": "gr",
      "packing": "paket",
      "price": 10,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Minaz Ailesi",
      "product_name": "Ceviz",
      "quantity": 1,
      "unit": "kg",
      "packing": "kese kağıdı",
      "price": 45,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Minaz Ailesi",
      "product_name": "Elma",
      "quantity": 1,
      "unit": "kg",
      "packing": "kese kağıdı",
      "price": 12,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Minaz Ailesi",
      "product_name": "Ayva",
      "quantity": 1,
      "unit": "kg",
      "packing": "kese kağıdı",
      "price": 15,
      "stock": "",
      "product_link": ""
    },
    {
      "producer": "Minaz Ailesi",
      "product_name": "İğde",
      "quantity": 500,
      "unit": "gr",
      "packing": "paket",
      "price": 15,
      "stock": "",
      "product_link": ""
    }
   ]
  const handleJsonProductImport = () => {

    const producers = _.uniqBy(productData, 'producer').map(d => d.producer);
    producers.forEach(async producer => {
      const data = await getProducerByTitle({
        variables:{
          payload: producer
        }
      })

      const products = productData.filter(d => d.producer === producer)
      products.forEach((p) => {
        const payload = {
          title: p.product_name,
          alias: p.product_name.toString().toLowerCase().replace(/ /g, '-'),
          price: p.price,
          measure_unit: p.unit.toUpperCase(),
          quantity: p.quantity,
          producer_id: data.data?.producers[0].id,
          packing_type: p.packing.toUpperCase(),
          quote_on_call: p.price ? false: true
        }
        insertProductMutation({
          variables:{
            payload:payload
          }
        })
      })

    })
  }


  const toggleClass = ' transform translate-x-5';
  const { data: producersData } = useListProducersQuery({
    variables: {
      offset:0, // value for 'offset'
      limit: 100, // value for 'limit'
    },
  });

  useEffect(() => {
    if (producersData) {
      setProducerList(producersData.producers);
    }
  }, [producersData]);

  return (
    <Content className="flex h-full mx-auto pt-8">
      {notification.title && (<Notification title={notification.title} message={notification.message} type={notification.type} />)}
      <div>
        <div>
          <Formik
            initialValues={{
              title: '',
              sku: "",
              producer_id: '3',
              price: '',
              measure_unit: '',
              quantity: '',
              description: '',
              thumbnail: '',
              category_id: '',
              packing_type: '',

            }}
            onSubmit={async (values, { resetForm }) => {
              handleQuery(values, resetForm);
            }}
            render={({ values, errors, touched, handleSubmit, resetForm }) => (
              <Form className="container mx-auto bg-white shadow rounded">
                <div>
                  <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                    <div className="flex items-center w-11/12 mx-auto">
                      <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                        Add New Product
                      </p>
                    </div>
                  </div>
                  <div className="w-11/12 mx-auto">
                    <div className="container mx-auto">
                      <div className="my-8 mx-auto xl:w-full xl:mx-0">
                        <TextInput type="text" name="title" title="Product Title" placeholder="Enter Product Title" />
                        <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                          <SelectInput name="producer_id" title="Producer / Family" options={producerList} />
                          <SelectInput name="category_id" title="Category" options={[]} />
                          <TextInput type="text" name="sku" title="Sku" placeholder="Enter Sku" />
                          <TextInput type="number" name="price" title="Price" placeholder="Enter Price" />
                          <SwitchInput title="Quote On Call" name="quote_on_call" toggle={toggle} toggleClass={toggleClass} setToggle={setToggle} />
                          <TextInput type="text" name="quantity" title="Quantity" placeholder="Enter Quantity" />
                          <SelectInput
                            name="measure_unit"
                            title="Measuring Unit"
                            options={[
                              {id: 'KG', title: 'KG'},
                              {id: 'ADET', title: 'ADET'},
                              {id: 'GR', title: 'GR'},
                              {id: 'ML', title: 'ML'},
                              {id: 'LT', title: 'LT'},
                            ]}
                          />
                          <TextInput type="text" name="thumbnail" title="Image Url" placeholder="Enter Image Url" />
                          <TextInput type="text" name="packing_type" title="Packing Type" placeholder="Enter Packing Type" />
                        </div>
                        <TextAreaInput name="description" title="Description" placeholder="Enter Description" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 mt-6 flex justify-end rounded-bl rounded-br">
                    <button
                      onClick={() => resetForm()}
                      className="btn text-sm focus:outline-none text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-500 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleJsonProductImport()}
                      className="bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
                      type="button"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    </Content>
  );
};
