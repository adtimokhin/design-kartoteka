"use client";
import DropDownOptions from "./components/DropDownOptions";
import Input from "./components/Input";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Tag from "./components/Tag";
import MainActionButton from "./components/MainActionButton";
import AddTagWindow from "./components/AddTagWindow";

export default function Home() {
  const tags = ["Apple1","Apple2", "Apple3", "Apple4", "Apple5", "Apple6", "Apple7", "Apple8", "Apple9", "Apple10", "Apple1", "Apple1", "Apple1", "Apple1", "Apple1", "Banana", "Orange", "Anton"];
  const [tagList, setTagList] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTagsText, setSelectedTagsText] = useState([]);

  const [addTagWindow, setAddTagWindow] = useState(false);

  const checkTags = (text) => {
    if (text === "") return setTagList([]);

    const filteredTags = tags.filter((tag) =>
      tag.toLowerCase().startsWith(text.toLowerCase()) && !selectedTagsText.includes(tag)
    ).slice(0, 10); // Limit to the first 10 items
    setTagList(filteredTags);
  };

  const addTag = (text) => {
    setSelectedTags((prevTags) => [...prevTags, <Tag text={text} />]);
    setSelectedTagsText((prevTags) => [...prevTags, text]);
    setTagList([]);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {addTagWindow &&  <AddTagWindow closeWindow={()=>{setAddTagWindow(false)}} createTag={()=>{}}/>}
     
      <NavBar addTagDile={()=>{setAddTagWindow(true)}}/>

      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-[80%] h-fit items-center align-middle justify-center flex flex-col space-y-5">
          <Input
            placeholder={"Search"}
            handleInputChange={(text) => checkTags(text)}
            selectedTags={selectedTags}
          />

          <MainActionButton text="View All" onClick={() => {console.log("Pressed");}} />
        </div>

        {tagList.length > 0 && (
            <DropDownOptions items={tagList} onItemPress={addTag} />
          )}

      </div>
    </div>
  );
}
