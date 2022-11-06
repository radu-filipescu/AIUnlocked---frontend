import { Component, OnInit } from '@angular/core';

import 'prismjs/plugins/line-numbers/prism-line-numbers';
import { PreprocessDto } from './Dto/PreprocessingDto';

import { SelectItem } from 'primeng/api';
import { SVCDto } from './Dto/SVCDto';
import { GlobalServiceService } from '../global-services/global-service.service';
import { knnDto } from './Dto/knnDto';
import { NaiveBayesDto } from './Dto/naiveBayesDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-builder',
  templateUrl: './code-builder.component.html',
  styleUrls: ['./code-builder.component.css']
})
export class CodeBuilderComponent implements OnInit {

  preprocessingDto: PreprocessDto = new PreprocessDto();

  machineLearningModel: string = "";

  svcDto = new SVCDto();
  knnDto = new knnDto();
  naiveBayesDto = new NaiveBayesDto();

  userClass1: string = "";
  userClass2: string = "";

  flipImageCode =
    `    if flipValue == True:
       for i in range(0, len(images)):
         if random.random() < subsetPercentage:
           images[i] = np.flip(images[i])`;

  brightnessCode =
    `    # Function used to change image brightness by a random value
    def brightness_augment(img):
      factor = random.uniform(0.5, 2)

      # Convert to HSV color mapping: alternative to RGB
      hsv = cv2.cvtColor(img, cv2.COLOR_RGB2HSV)
      hsv = np.array(hsv, dtype=np.float64)

      # Scale channel V uniformly
      hsv[:, :, 2] = hsv[:, :, 2] * (factor + np.random.uniform())

      # Bring values back into range
      hsv[:, :, 2][hsv[:, :, 2] > 255] = 255

      #Convert back to RGB
      rgb = cv2.cvtColor(np.array(hsv, dtype=np.uint8), cv2.COLOR_HSV2RGB)
      return rgb

    if brightnessValue == True:
       for i in range(0, len(images)):
         if random.random() < subsetPercentage:
           images[i] = brightness_augment(images[i])`;

  contrastCode =
    `    # Function used to change image contrast by a random value
    def contrast_augment(img):
      contrast = random.randint(200, 300)

      # Increase the contrast by multiplying with the
      # randomly chosen ratio
      dummyImg = np.int16(img)
      dummyImg = dummyImg * (contrast/127+1) - contrast

      # Trim values over the range
      dummyImg = np.clip(dummyImg, 0, 255)
      img = np.uint8(dummyImg)
      return img

     if contrastValue == True:
       for i in range(0, len(images)):
         if random.random() < subsetPercentage:
           images[i] = contrast_augment(images[i])`;

  saturationCode =
    `    # Function used to change image saturation by a random value
    def saturation_augment(img):
      value = np.random.choice(np.array([-50, -40, -30, 30, 40, 50]))

      # Convert to HSV color mapping: alternative to RGB
      hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
      h, s, v = cv2.split(hsv)

      # Change the S (saturation) channel with the randomly
      # chosen value
      if value >= 0:
          lim = 255 - value
          s[s > lim] = 255
          s[s <= lim] += value
      else:
          lim = np.absolute(value)
          s[s < lim] = 0
          s[s >= lim] -= np.absolute(value)

      # Reconstruct the image and convert back to RGB
      final_hsv = cv2.merge((h, s, v))
      img = cv2.cvtColor(final_hsv, cv2.COLOR_HSV2BGR)
      return img

    if saturationValue == True:
       for i in range(0, len(images)):
         if random.random() < subsetPercentage:
           images[i] = saturation_augment(images[i])`;

  greyscaleCode =
    `    # Function used to convert image to greyscale
    def greyscale_augment(img):
    # Convert image to greyscale using the OpenCV library
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Since greyscale only uses one channel instead of 3,
    # convert back to 3 channels.
    img = np.stack((img,) * 3, axis=-1)
    return img

    if greyscaleValue == True:
     for i in range(0, len(images)):
       if random.random() < subsetPercentage:
         images[i] = greyscale_augment(images[i])`;


  svcImportsCode =
    `    #scikit modules (sklearn and skimage) provide simple and efficient tools for predictive data analysis
    from sklearn import svm
    from skimage.transform import resize
    from skimage.io import imread
    from sklearn.model_selection import train_test_split`;

  knnImportsCode =
    `    #scikit modules (sklearn and skimage) provide simple and efficient tools for predictive data analysis
    from sklearn.neighbors import KNeighborsClassifier
    from skimage.transform import resize
    from skimage.io import imread
    from sklearn.model_selection import train_test_split`;

  naiveBayesImportsCode =
    `   #scikit modules (sklearn and skimage) provide simple and efficient tools for predictive data analysis
    from sklearn.naive_bayes import ComplementNB
    from skimage.transform import resize
    from skimage.io import imread
    from sklearn.model_selection import train_test_split`;

  language = 'javascript';

  content: string = "";

  parameters_width: number = 50;
  code_width: number = 50;
  adjust_button_x: number = 49.3;

  mouseX = 0;

  constructor(public globalService: GlobalServiceService, public router: Router) {

  }

  ngOnInit() {
    this.reevaluateExpression();

    this.userClass1 = GlobalServiceService.userClass1;
    this.userClass2 = GlobalServiceService.userClass2;
  }

  getCDisplayValue() {
    return Math.pow(10, this.svcDto.c);
  }

  reevaluateExpression() {
    let naiveBayesCode =
      `   images_array = []
      labels_array = []

      #get all images from the selected classes and associate them with their labels

      for image_name in os.listdir(first_class_path):
        image = imread( first_class_path + "/" + image_name )
        resized_image = resize(image,(32, 32, 3))

      #convert image format to a one-dimensional list
      images_array.append(resized_image.flatten())
      labels_array.append(${this.userClass1})

      for image_name in os.listdir(second_class_path):
        image = imread(second_class_path + "/" + image_name)
        resized_image = resize(image, 32, 32, 3))

      images_array.append(resized_image.flatten())
      labels_array.append(${this.userClass2})

      images_array = np.array(images_array)
      labels_array = np.array(labels_array)

      #split the data in training and test samples with a given percentage (20%)
      train_images, test_images, train_labels, test_labels = train_test_split(
        images_array,
        labels_array,
        test_size=0.2,
        shuffle=True)

      #initialize the model with the chosen parameters
      naive_bayes_model = ComplementNB( ${this.naiveBayesDto.alpha} )

      #train the model
      naive_bayes_model.fit(images_array, labels_array)

      #classify the test samples and compare the prediction with the correct output
      accuracy = naive_bayes_model.score(test_images, test_labels)`;

    let knnCode =
      `   images_array = []
    labels_array = []

    #get all images from the selected classes and associate them with their labels

    for image_name in os.listdir(first_class_path):
      image = imread( first_class_path + "/" + image_name )
      resized_image = resize(image,(32, 32, 3))

    #convert image format to a one-dimensional list
    images_array.append(resized_image.flatten())
    labels_array.append(${this.userClass1})

    for image_name in os.listdir(second_class_path):
      image = imread(second_class_path + "/" + image_name)
      resized_image = resize(image,(32, 32, 3))

    images_array.append(resized_image.flatten())
    labels_array.append(${this.userClass2})

    images_array = np.array(images_array)
    labels_array = np.array(labels_array)

    #split the data in training and test samples with a given percentage (20%)
    train_images, test_images, train_labels, test_labels = train_test_split(
    images_array,
    labels_array,
    test_size=0.2,
    shuffle=True,
  )

    #initialize the model with the chosen parameters
    nearest_neighbors_model = KNeighborsClassifier( n_neighbors = ${this.knnDto.neighbors}, weights = ${this.knnDto.weights})

    #train the model
    nearest_neighbors_model.fit(images_array, labels_array)

    #classify the test samples and compare the prediction with the correct output
    accuracy = nearest_neighbors_model.score(test_images, test_labels)
`

    let svcCode =
      `    images_array = []
    labels_array = []

    #get all images from the selected classes and associate them with their labels

    for image_name in os.listdir(first_class_path):
      image = imread( first_class_path + "/" + image_name )
      resized_image = resize(image,(32, 32, 3))

    #convert image format to a one-dimensional list
    images_array.append(resized_image.flatten())
    labels_array.append(${this.userClass1})

    for image_name in os.listdir(second_class_path):
      image = imread(second_class_path + "/" + image_name)
      resized_image = resize(image, 32, 32, 3))

    images_array.append(resized_image.flatten())
    labels_array.append(${this.userClass2})

    images_array = np.array(images_array)
    labels_array = np.array(labels_array)

    #split the data in training and test samples with a given percentage (20%)
    train_images, test_images, train_labels, test_labels = train_test_split(
      images_array,
      labels_array,
      test_size=0.2,
      shuffle=True,
    )

    #initialize the model with the chosen parameters
    support_vector_classification_model = svm.SVC(C = ${Math.pow(10, this.svcDto.c)}, kernel = ${this.svcDto.kernel}, gamma = ${this.svcDto.gamma})

    #train the model
    support_vector_classification_model.fit(images_array, labels_array)

    #classify the test samples and compare the prediction with the correct output
    accuracy = support_vector_classification_model.score(test_images, test_labels)`;

    this.content =
      `  #Boilerplate code (necessary imports)
    import numpy as np
    import os
    import random
    import cv2
    from matplotlib import image
    from matplotlib import pyplot
    from numpy import asarray
    from PIL import Image\n\n`
      + (this.machineLearningModel == 'SVC' ? this.svcImportsCode + '\n\n' : "")
      + (this.machineLearningModel == 'kNN' ? this.knnImportsCode + '\n\n' : "")
      + (this.machineLearningModel == 'Naive Bayes' ? this.naiveBayesImportsCode + '\n\n' : "")
      + (this.preprocessingDto.flipValue ? this.flipImageCode + '\n\n' : "")
      + (this.preprocessingDto.brightnessValue ? this.brightnessCode + '\n\n' : "")
      + (this.preprocessingDto.contrastValue ? this.contrastCode + '\n\n' : "")
      + (this.preprocessingDto.saturationValue ? this.saturationCode + '\n\n' : "")
      + (this.preprocessingDto.grayscaleValue ? this.greyscaleCode + '\n\n' : "")
      + `    # Copy the images back into the data set folder
    os.makedirs('data/train_data2/')
    counter = 1
    for image in images:
        img = Image.fromarray(image)
        img.save('data/train_data2/' + str(counter) + ".jpg")
        counter += 1

`
      + (this.machineLearningModel == 'SVC' ? svcCode + '\n\n' : "")
      + (this.machineLearningModel == 'kNN' ? knnCode + '\n\n' : "")
      + (this.machineLearningModel == 'Naive Bayes' ? naiveBayesCode + '\n\n' : "");
  }

  onDragStart(event) {
    this.mouseX = event.clientX;
    var img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    event.dataTransfer.setDragImage(img, 0, 0);
  }

  onDrag(event) {
    if (event.clientX === 0) {
      return;
    }
    var offset = this.mouseX - event.clientX;

    if (this.parameters_width < 20 && offset > 0) {
      return;
    }
    if (this.code_width < 20 && offset < 0) {
      return;
    }

    var w = window.innerWidth;
    var offset_percentage = offset * 100 / w;

    this.parameters_width = this.parameters_width - offset_percentage;
    this.code_width = this.code_width + offset_percentage;
    this.adjust_button_x = this.adjust_button_x - offset_percentage;

    //this.mouseX = event.clientX;
    console.log("mouseX: " + this.mouseX + " " + "clientX: " + event.clientX);
    this.mouseX = event.clientX;
  }

  onDragEnd(event) {
    /*event.target.style.opacity = 1;*/
  }

  generateModel() {
    if (this.machineLearningModel == 'SVC') {
      this.globalService.setSVCConfig(this.svcDto)
        .subscribe(() => {
          console.log('saved config');
        });
    }

    if (this.machineLearningModel == 'kNN') {
      this.globalService.setKNNConfig(this.knnDto)
        .subscribe(() => {
          console.log('saved config');
        });
    }

    if (this.machineLearningModel == 'Naive Bayes') {
      this.globalService.setNBConfig(this.naiveBayesDto)
        .subscribe(() => {
          console.log('saved config');
        });
    }
  }


  generateModel2() {
    this.globalService.postCode(this.machineLearningModel, this.userClass1, this.userClass2)
      .subscribe(() => {
    });

    this.router.navigate(['results']);
    console.log('results');
  }

}
