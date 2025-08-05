"use client"
import React, { useState } from 'react'
import {Col, Row, Checkbox } from "antd";
import Test  from '../component/test/Test';
import List  from '../component/test/List';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import booksData from '../booksData.json';
import InputWithLabel from '../../components/Form/InputWithLabel';

export default function Contact() {
  // states
//book state
const [bookSearch, setSearchBook]= useState("")
const [bookItem, setBookItem]= useState(booksData)
const [filteredType, setFilteredType] = useState("");
//book state end

  const [searchTearm, setSearchTerm]= useState('React');
  const item= 
    {
      id:1,
      title:"Test component",
      url:"/test/test.com",
      athour:"sifat khan",
      points:"98"
    }
    const searchStories = [
      {
        id:4,
        title:"Test component",
        url:"/test/test.com",
        author:"Sifat khan",
        points:"98"
      },
      {
        id:5,
        title:"try component",
        url:"/test/test1.com",
        author:"Karim khan",
        points:"98"
      }
    ]
  const handleSearch = (e)=>{
    const value= e.target.value;
  }

  const businessOperation = [
    
    {
      id:1,
      param1:"element a",
      active:true
    },
    {
      id:2,
      param1:"element b",
      active:false
    },
    {
      id:3,
      param1:"element c",
      active:true
    },
    {
      id:4,
      param1:"element d",
      active:true
    },
    {
      id:5,
      param1:"element e",
      active:true
    },
    {
      id:6,
      param1:"element f",
      active:true
    },
    {
      id:7,
      param1:"element g",
      active:true
    },
    {
      id:8,
      param1:"element h",
      active:false
    },
  ];

  const [stories, setStories] = useState(businessOperation)
  const handleRemoveStories = (item) =>{
    const newStories = stories.filter((story)=> item.id !== story.id);
    setStories(newStories)
  }
  console.log(stories, "stories")

  const tree = new Object();
  const myWord = new String("It is impolite to Wink!");
   tree.size = "big and tall";
   tree.shade = "it keeps us cool in the summer";
   tree.fall = "We make giant leaf pumpkins";
   const display = tree.fall.indexOf("giant")
  function add(s){
    let a = parseInt(s, 10)
    console.log(a, 'a')
    let b = s.indexOf('+');
    console.log(b, 'b');
    let c = s.substr(b+1)
    console.log(c, 'c')
    let d = parseInt(c)
    return a+ d
  }

  add('102+17')
   console.log(display, "display page")

   //books search
   console.log(booksData, "books");

  //  const resetFilters = (e)=>{
  //   const query = e.target.value.toLowerCase();
  //   setSearchBook(query);
  //   const searchResult = booksData.filter((item) =>
  //   item.name.toLowerCase().includes(query)
  //   )
  //   setBookItem(searchResult);
  //  }
 const handleTypeFilter = (type)=>{
  setFilteredType(type);
 }
  const resetFilters = booksData.filter(data=> {
    const matchType = filteredType ? data.type === filteredType : true;
    const matchSearch = bookSearch ? data.name.toLowerCase().includes(bookSearch.toLowerCase()) : true;
    return matchType && matchSearch;
  })


  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
      <div>
        <Header/>
          <div className="w-full h-[300px] bg-cover bg-center" style={{backgroundImage: 'url(/image/sunset.jpg)'}}>
             <p className="font-berkshire text-5xl md:text-6xl text-center p-3"> This is Contact Page</p>
          </div>
        <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {stories && stories.map((item, index)=>(
                <Col
                  className="gutter-row"
                  span={6}
                  key={index}
                  style={
                    {
                      // marginBottom: "20px",
                    }
                  }
                >
                   <Checkbox checked={item.active} readOnly style={{color:"black"}}>
                     {item.param1}
                      </Checkbox>
                  </Col>
                  ))}
            </Row>
        </div>
        {/* test search */}
        <div className='m-4 w-full'>
          <Row>
            <Col span={6}>
            <input className='p-1 rounded-md pl-2' placeholder='search books...' type="text" onChange={(e)=>setSearchBook(e.target.value)}/>
          </Col>
            <Col span={6}>
            <button className='bg-red-300 px-2 py-1 shadow-md hover:bg-red-400 transition hover:scale-110 ease-out hover:ease-in hover:ring-1 rounded-md duration-300' onClick={() => handleTypeFilter("story")}>Story</button>
          </Col>
            <Col span={6}>
            <button className='bg-orange-300 px-2 py-1 shadow-md hover:bg-orange-400 transition hover:scale-110 ease-out hover:ease-in hover:ring-1 rounded-md duration-300' onClick={() => handleTypeFilter("essay")}>Essay</button>
          </Col>
          </Row>
          <Row>
          {resetFilters.map((data, i)=> (
            <Col className='m-3 p-2 rounded-md bg-slate-300' key={i}>
              <p>{data.name}</p>
              <p>{data.price}</p>
              </Col>
          )) 
          }
          </Row>
        </div>
      </div>
      <div className='flex'>
      <div className='justify-center w-1/5 m-2'> {searchTearm}
      </div>
        <div>
          <Test item={item} />
        </div>
        <div className='m-5'>
          <InputWithLabel
          id="search"
          value={searchTearm}
          isFocused
          onInputChange={(e)=>setSearchTerm(e.target.value)}
          >
          <strong>Search:</strong>
          </InputWithLabel>
        </div>
      </div>
      <div>
        <hr/>
        <List list={searchStories} onRemoveItem={handleRemoveStories}/>

      </div>

        <Footer
          setSearchTerm= {setSearchTerm}
        />
   </div>
  )
}
