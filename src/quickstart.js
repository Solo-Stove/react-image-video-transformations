import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";

export function getQuickstartImage() {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image('docs/models'); 

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));

  return myImage;
}

export function getBaseImage() {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'solostove'
    }
  });
  const myImage = cld.image('transform/02a5d7f3-352f-444d-a24a-1b70266f2bc9/SoloStove-Camping-x-Ryan-Kost_Oct-21-23_008');

  return myImage;
}