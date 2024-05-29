/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const TOKENARRAY = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eye_color, hairstyle, shirt_type, bling){
    var token = {
        name: name,
        eye: eye_color,
        hair: hairstyle,
        shirt: shirt_type,
        bling: bling
    };
    TOKENARRAY.push(token);
    console.log("Minted Non fungible token named: \n" + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(var i=0; i<TOKENARRAY.length; i++){
        console.log("Name: " + TOKENARRAY[i].name + "\nEye Color: " + TOKENARRAY[i].eye
            + "\nHairstyle: " + TOKENARRAY[i].hair + "\nShirt Type: " + TOKENARRAY[i].shirt + 
            "\njewelry: "+ TOKENARRAY[i].bling + "\n"
        );
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return ("Total number of NFTs: " + TOKENARRAY.length)
}

// call your functions below this line
mintNFT("harsh", "black", "soldier", "type1", "sparkle haven");
mintNFT("tyagi", "brown", "taper", "type2", "luxury palace");
mintNFT("akshay", "gray", "buzz cut", "type3", "dazzle boutique");
mintNFT("ishant", "hazel", "faux hawk", "type4", "gleam emporium");
mintNFT("arya", "amber", "undercut", "type5", "opulent ornaments");
mintNFT("shubhad", "brown", "side part", "type6", "elegant adornments");

console.log("\n\n\nlisting nfts: \n")
listNFTs();

console.log("\n\ntotal supply: " + (getTotalSupply()));

