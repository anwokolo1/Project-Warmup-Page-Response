// Names of the image files shown in the story
let imgFiles = ["based forest.avif", "chill forest.avif", "creepy forest.avif", "guy in garden.avif",
                "sleeping in forest.avif"];

for (let i = 0; i < imgFiles.length; i++) {
    imgFiles[i] = "images/" + imgFiles[i];
}

// Captions associated with each image
let imgCaptions = new Array(5);
imgCaptions[0]="something happens here";
imgCaptions[1]="another thing happens here";
imgCaptions[2]="another thing after the thing that happens happens here";
imgCaptions[3]="a thing after the other thing after the thing that happens after the thing happens here";
imgCaptions[4]="i don't wanna type allat";


// Count of images in the slideshow
let imgCount = imgFiles.length;
