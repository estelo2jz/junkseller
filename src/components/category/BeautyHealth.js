import React from 'react';
import ElectronicsProductTemplate from '../ElectricCategory/Category/ElectronicsProductTemplate';
import BeautyHealthMenu from '../BeautyHealthCategory/BeautyHealthMenu';
import '../../styles/BeautyHealth.scss';

import  SqaureFeatured from './HomePageComponents/SqaureFeatured';
import  CircleFeaturedCategories from './HomePageComponents/CircleFeaturedCategories';
import  FirstFeaturedProduct from './HomePageComponents/FirstFeaturedProduct';
import  SecondFeaturedProduct from './HomePageComponents/SecondFeaturedProduct';
import  MultiSqaure from './HomePageComponents/MultiSqaure';
import  TwoProductTemplate from './HomePageComponents/TwoProductTemplate';
import  TwoProductTemplateTwo from './HomePageComponents/TwoProductTemplateTwo';

function BeautyHealth() {
  return (
    <div className="products__base">
      <div className="beauty-health__container">
        <div className="beauty-health__container-heading">
         <BeautyHealthMenu 
              category0="All Beauty" 
              category1="Premium Beauty"
              category2="Professional Skin Care"
              category3="Salon & Spa"
              category4="Men's Grooming"
              category5="Health, Household & Baby"
              category6="Vitamins & Dietary Supplements"
            />
        </div>
        <div className="beauty-health__container-flex-grid">
          {/* <div className="beauty-health__container-flex-1">
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={120.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />
            <ElectronicsProductTemplate
              id="123123"
              title=""
              price={119.99}
              rating={4}
              image=""
            />  
          </div> */}
          <div className="beauty-health__container-flex-1">
            <CircleFeaturedCategories
              image = "https://images-na.ssl-images-amazon.com/images/I/71BW2BO-eWL._AC._SR360,460.jpg"
              title = "Personal Care"
              path = ""
            />
            <CircleFeaturedCategories
              image="https://images-na.ssl-images-amazon.com/images/I/61IAMQSeNcL._AC._SR360,460.jpg"
              title="Skin Care"
              path=""
            />
            <CircleFeaturedCategories
              image="https://images-na.ssl-images-amazon.com/images/I/81ach8tKTzL._AC._SR360,460.jpg"
              title="Tools & Accessories"
              path=""
            />
            <CircleFeaturedCategories
              image="https://images-na.ssl-images-amazon.com/images/I/81aQaBeu5PL._AC._SR360,460.jpg"
              title="Hair Care"
              path=""
            />
            <CircleFeaturedCategories
              image="https://images-na.ssl-images-amazon.com/images/I/51Lda3yRzlL._AC._SR360,460.jpg"
              title="Makeup"
              path=""
            />
            <CircleFeaturedCategories
              image="https://m.media-amazon.com/images/I/71Bd-b6tgNL._AC_UL320_.jpg"
              title="Foot, Hand & Nail Care"
              path=""
            />
            <CircleFeaturedCategories
              image="https://images-na.ssl-images-amazon.com/images/I/51O973X-qxL.jpg"
              title="Shave & Hair Removal"
              path=""
            />
            <CircleFeaturedCategories
              image="https://images-na.ssl-images-amazon.com/images/I/51-dKuHC0pL._SL1000_.jpg"
              title="Fragrance"
              path=""
            />
          </div>
          <div className="beauty-health__container-flex-1">
          <SqaureFeatured 
              image= "https://images-na.ssl-images-amazon.com/images/I/71NAZ7a2iWL._AC._SR360,460.jpg"
              title = "Skin Care"
              path = "/"
            />
            <MultiSqaure 
              imageOne= "https://m.media-amazon.com/images/I/51FqVUcBfvL._AC_UL480_FMwebp_QL65_.jpg"
              titleOne = "Moisturizers"
              pathOne = ""
              imageTwo= "https://m.media-amazon.com/images/I/712oifleV0L._AC_UL480_FMwebp_QL65_.jpg"
              titleTwo = "Cleansers"
              pathTwo = ""
              imageThree= "https://m.media-amazon.com/images/I/71lWSIe8TcL._AC_UL480_FMwebp_QL65_.jpg"
              titleThree = "Scrubs & Body"
              pathThree = ""
              imageFour= "https://m.media-amazon.com/images/I/51AaQMpQQqL._AC_UL480_FMwebp_QL65_.jpg"
              titleFour = "Creams"
              pathFour = ""
            />
            <SqaureFeatured 
              image= "https://images-na.ssl-images-amazon.com/images/I/61vIronbAXL._AC._SR360,460.jpg"
              title = "Hair Care"
              path = "/"
            />
            <SqaureFeatured 
              image= "https://images-na.ssl-images-amazon.com/images/I/71C6l0ZbmJL._AC._SR360,460.jpg"
              title = "Make Up"
              path = "/"
            />
            <SqaureFeatured 
              image= "https://m.media-amazon.com/images/I/71Of0tUd9CL._AC_UL480_FMwebp_QL65_.jpg"
              title = "Foot, Hand & Nail"
              path = "/"
            />
            <MultiSqaure 
              imageOne= "https://images-na.ssl-images-amazon.com/images/I/61zNIn4jbAL._AC._SR360,460.jpg"
              titleOne = "Bags & Cases"
              pathOne = ""
              imageTwo= "https://m.media-amazon.com/images/I/71bqzj4N-sL._AC_UL480_FMwebp_QL65_.jpg"
              titleTwo = "Mirrors"
              pathTwo = ""
              imageThree= "https://m.media-amazon.com/images/I/61Q39wAsvzL._AC_UL480_FMwebp_QL65_.jpg"
              titleThree = "Makeup Brushes"
              pathThree = ""
              imageFour= "https://images-na.ssl-images-amazon.com/images/I/51+WT-NnEhL._AC._SR360,460.jpg"
              titleFour = "Shears"
              pathFour = ""
            />
            <SqaureFeatured 
              image= "https://images-na.ssl-images-amazon.com/images/I/71yWj-qTaXL._AC._SR360,460.jpg"
              title = "Fragrance"
              path = "/"
            />
          </div>
          <div className="beauty-health__container-flex-1">
          <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/41qNPq8bhkL.jpg"
              title = "Nootropic Brain Support Supplement - NEURIVA Original Strawberry Gummies (50 count in a bottle) Phosphatidylserine, Gluten Free, Vegetarian - Supports Focus, Memory, Learning, Accuracy & Concentration"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/413npibeJsL.jpg"
              title = "Vitamin D3, MSM, Glucosamine and Chondroitin - Move Free Advanced Joint Support Tablets (120 count in a bottle), 2 Month Supply, Supports Mobility, Flexibility, Strength, Lubrication and Comfort"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/81Ck718oiSL._AC_SL1500_.jpg"
              title = "Aromatherapy Essential Oil Diffuser Gift Set - 400ml Ultrasonic Diffuser with 20 Essential Plant Oils - 4 Timer & 7 Ambient Light Settings - Therapeutic Grade Essential Oils"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/71opQ5CDRcL._AC_SL1500_.jpg"
              title = "MZOO Sleep Eye Mask for Men Women, 3D Contoured Cup Sleeping Mask & Blindfold, Concave Molded Night Sleep Mask, Block Out Light, Soft Comfort Eye Shade"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://m.media-amazon.com/images/I/81x2YmGSTZL._AC_UL320_.jpg"
              title = "Softsoap Moisturizing Liquid Hand Soap, Soothing Clean Aloe Vera - 7.5 Fluid Ounces (6 Pack)"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/71aBNdC6eHL._AC._SR360,460.jpg"
              title = "Olay Regenerist Collagen Peptide 24 Face Moisturizer with Vitamin"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/41pDI7C2f1L._AC_SX184_.jpg"
              title = "hum by Colgate Smart Electric Toothbrush Kit, Rechargeable Sonic Toothbrush with Travel Case and Replacement Head, Blue"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/81z8tQe35hL._AC._SR360,460.jpg"
              title = "Neutrogena Makeup Remover Cleansing Face Wipes, Daily Cleansing"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/61qrVGArdxL._SL1500_.jpg"
              title = "Shower Brush with Soft and Stiff Bristles, Exfoliating Skin and A Soft Scrub, Double-sided Brush Head for Wet or Dry Brushing, Specially Long Wooden Handle"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/71jNuKWF9PL._SL1500_.jpg"
              title = "MSQ Eye Makeup Brushes 12pcs Rose Gold Eyeshadow Makeup Brushes Set with Soft Synthetic Hairs & Real Wood Handle for Eyeshadow, Eyebrow, Eyeliner"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/61sKdG3rSZL._SL1500_.jpg"
              title = "Equinox Professional Razor Edge Series Barber Hair Cutting Scissors - Japanese Stainless Steel Salon Scissors - 6.5” Overall Length - Fine Adjustment"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/91l2Hzlu8zL._AC._SR360,460.jpg"
              title = "Crest 3D White Professional Effects Whitestrips 20 Treatments"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/71Cfu6o0GEL._AC._SR360,460.jpg"
              title = "EltaMD UV Clear Facial Sunscreen Broad-Spectrum SPF 46"
              path = ""
            />
            <FirstFeaturedProduct 
              image = "https://images-na.ssl-images-amazon.com/images/I/61oGUuTKRyL._SL1001_.jpg"
              title = "BEAKEY 3+1 Pcs Makeup Sponges with Kabuki Contour Brush, Beauty Sponge Blenders with 3 Shapes for Liquid Foundation, Cream and Powder (3 Sponges+ 1 Contour"
              path = ""
            />
          </div>
          <div className="beauty-health__container-flex-1">
          <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/81iN7q7k5UL._AC_SL1500_.jpg"
              title = "SlimFast Keto Fat Bomb Snacks - Caramel Chocolate - 14 Count Box - Pantry Friendly"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/71h2r5pc4UL._AC_SL1500_.jpg"
              title = "Emergen-C 1000mg Vitamin C Powder, with Antioxidants, B Vitamins and Electrolytes, Vitamin C Supplements for Immune Support, Caffeine Free Fizzy Drink Mix"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/91%2BZlr-bjYL._AC_SL1500_.jpg"
              title = "7 in 1 Zinc 50mg Elderberry, Vitamin D 5000 IU, Vitamin C, Tumeric and Ginger & Echinacea Immune System Booster Support Supplement - Immunity for Adults"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/61u8BiWYkwL._AC_SL1000_.jpg"
              title = "Pataday Once Daily Relief Extra Strength Relief 2.5ml, 2 Count"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/61F5jOpaM9L._AC_SL1500_.jpg"
              title = "Bug Bite Thing Suction Tool, Poison Remover - Bug Bites and Bee/Wasp Stings, Natural Insect Bite Relief, Chemical Free - White/Single"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/712hc9K1ZjL._AC_SL1500_.jpg"
              title = "(2 Pack) 25000MG Hemp Oil for Pain Relief Anxiety Sleep Mood Stress 50,000mg Total - Aceite de Cáñamo, l'huile de chanvre, Immune Support"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/61nD3BQjY0L._AC_SL1403_.jpg"
              title = "Massage Gun Deep Tissue Percussion Muscle Massage for Pain Relief, Super Quiet Portable Neck Back Body Relaxation Electric Drill Sport Massager Brushless"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/919musVrrCL._AC_SL1500_.jpg"
              title = "MIGHTY BLISS Large Electric Heating Pad for Back Pain and Cramps Relief -Extra Large 12'x24' - Auto Shut Off - Heat Pad with Moist & Dry"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/91wvG8mS6KL._AC_SL1500_.jpg"
              title = "Band-Aid Brand Flexible Fabric Adhesive Bandages for Wound Care & First Aid, Assorted Sizes, 100 ct, Beige"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/51ZVlDownDL._AC_SL1200_.jpg"
              title = "Rosenice Aventurine Gua Sha Scraping Massage Tools, Gua Sha Facial Tool, Jade Stone Guasha Board for Face Body Massage SPA Acupuncture Therapy Trigger Point"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/711m5tmAqAL._AC_SL1500_.jpg"
              title = "Letsfit White Noise Machine with Adjustable Baby Night Light for Sleeping, 14 High Fidelity Sleep Machine Soundtracks, Timer and Memory Feature, Sound"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/7160HGJMSIL._AC_SL1500_.jpg"
              title = "Postpartum Recovery Essentials Kit + Upside Down Peri Bottle"
              path = ""             
             />
            <SecondFeaturedProduct
              image = "https://images-na.ssl-images-amazon.com/images/I/81gFpMkbpnL._AC_SL1500_.jpg"
              title = "Frida Mom Hospital Packing Kit for Labor, Delivery, & Postpartum | Nursing Gown, Socks, Peri Bottle, Disposable Underwear, Ice Maxi Pads, Pad Liners"
              path = ""             
             />
          </div>
          <div className="beauty-health__container-flex-1">
          <TwoProductTemplate 
              titleOne = "SteelBee Razor Saver | Anti-Rust Razor Cover | Blade Life-Extender | Travel Cartridge Protector | Corrosion-Preventing Attachment (2Pack)"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61vzRKgRgNL._SL1500_.jpg"
              pathOne = ""
              priceOne = "11.04"
              titleTwo = "Vanelc 24k Gold Under Eye Mask-with Collagen Under Eye Patches, Dark Circles Under Eye Treatment, Under Eye Bags Treatment, Under Eye Mask for Puffy Eyes"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61y%2BFElJ5VL._SL1000_.jpg"
              pathTwo = ""
              priceTwo = "11.95"
            />
            <TwoProductTemplate 
              titleOne = "ToiletTree Products Poseidon Oral Irrigator and Sonic Toothbrush Inductive Charging Combo Set, Multiple Users, Rechargeable"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61nT6ANoW3L._SL1500_.jpg"
              pathOne = "Purple Shampoo for Blonde Hair: Blonde Shampoo Eliminates Brassy Yellow Tones- Lightens Blonde, Platinum, Ash, Silver and Grays- Paraben & Sulfate Free"
              priceOne = "59.95"
              titleTwo = "Purple Shampoo for Blonde Hair: Blonde Shampoo Eliminates Brassy Yellow Tones- Lightens Blonde, Platinum, Ash, Silver and Grays- Paraben & Sulfate Free Toner- Revitalize Bleached & Highlighted Hair"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81vRmNj-ymL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "24.95"
            />
            <TwoProductTemplate 
              titleOne = "Cleverfy Shower Steamers - [6X] Aromatherapy Shower Bombs with Essential Oils for Relaxation. Set Includes Lavender, Eucalyptus, Vanilla, Watermelon"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81QhmidwCAL._AC_SL1500_.jpg"
              pathOne = "19.99"
              priceOne = ""
              titleTwo = "Birthday Gifts Basket for Women - Best Friend Bday Gift for Woman -  Happy Birthday Care Box Idea for Her - Surprise Spa Package for Mom Sister"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/91i4NtreMrL._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "35.99"
            />
            <TwoProductTemplate 
              titleOne = "eos Super Soft Shea Lip Balm, Shea Lip Balm: Cherry Vanilla. Flavored lip balm"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81eMCtlMQxL._SL1500_.jpg"
              pathOne = ""
              priceOne = "9.95"
              titleTwo = "REVLON One-Step Hair Dryer And Volumizer Hot Air Brush, Black, Packaging May Vary"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71aXzv34N%2BL._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "9.99"
            />
            <TwoProductTemplate 
              titleOne = "CeraVe Hydrating Facial Cleanser | Moisturizing Non-Foaming Face Wash with Hyaluronic Acid, Ceramides & Glycerin | 16 Fluid Ounce"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/51DbQev1thL._SL1000_.jpg"
              pathOne = ""
              priceOne = "7.85"
              titleTwo = "TruSkin Vitamin C Serum for Face with Hyaluronic Acid, Vitamin E, Witch Hazel, 1 fl oz"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/516yN4iPdQL._SL1250_.jpg"
              pathTwo = ""
              priceTwo = "10.70"
            />
            <TwoProductTemplate 
              titleOne = "KISS Strip Eyelash Adhesive, Clear 0.176 Oz KPLGL01"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81hiBS84AYL._SL1500_.jpg"
              pathOne = ""
              priceOne = "12.65"
              titleTwo = "Paulas Choice--SKIN PERFECTING 2% BHA Liquid Salicylic Acid Exfoliant--Facial Exfoliant for Blackheads, Enlarged Pores, Wrinkles & Fine Lines, 4 oz Bottle"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71597cVNe1L._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "9.99"
            />
            <TwoProductTemplate 
              titleOne = "New Hair Chalk Comb Temporary Bright Hair Color Dye for Girls Kids, Washable Hair Chalk for Girls Age 4 5 6 7 8 9 10 New Year Birthday Party Cosplay DIY"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71bkDYhBOWL._SL1200_.jpg"
              pathOne = ""
              priceOne = "15.87"
              titleTwo = "Burt's Bees Classics Gift Set, 6 Products in Giftable Tin – Cuticle Cream, Hand Salve, Lip Balm, Res-Q Ointment, Hand Repair Cream and Foot Cream"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81-frYE2BNL._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "25.65"
            />
            <TwoProductTemplate 
              titleOne = "LifeAround2Angels Bath Bombs Gift Set 12 USA made Fizzies, Shea & Coco Butter Dry Skin Moisturize, Perfect for Bubble & Spa Bath. Handmade Birthday"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61H1Xin-yJL.jpg"
              pathOne = ""
              priceOne = "9.99"
              titleTwo = "Lip Smacker Lippy Pal Lip Balm, Bunny, Hoppy Carrot Cake"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/51ffVyYk6gL._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "6.95"
            />
            <TwoProductTemplate 
              titleOne = "Tree Hut Shea Sugar Body Scrub Coconut Lime 18 oz"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/91noaNLihmL._SL1500_.jpg"
              pathOne = ""
              priceOne = "7.99"
              titleTwo = "Bio-Oil Skincare Oil, Body Oil for Scars and Stretch Marks, Serum Hydrates Skin, Non-Greasy, Dermatologist Recommended, Non-Comedogenic, 0.85 Ounces, Pack"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/51O7DvtsDZL.jpg"
              pathTwo = ""
              priceTwo = "14.56"
            />
            <TwoProductTemplate 
              titleOne = "Jade Roller & Gua Sha, Face Roller, Facial Beauty Roller Skin Care Tools, BAIMEI Rose Quartz Massager for Face, Eyes, Neck, Body Muscle Relaxing"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61knSPRaOzL._SL1100_.jpg"
              pathOne = ""
              priceOne = "19..99"
              titleTwo = "NYX PROFESSIONAL MAKEUP Butter Gloss - Creme Brulee, Natural"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/51laB6ewuFL._SL1000_.jpg"
              pathTwo = ""
              priceTwo = "11.99"
            />
            <TwoProductTemplate 
              titleOne = "Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool, Eyebrow Razor, and Facial Razor with Precision Cover, 3 Count"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61OhCniqB1L._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "9.96"
              titleTwo = "wet n wild Blush Brush, VEGAN MAKEUP BRUSHES"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/51u7b2CKdkL._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "2.99"
            />
          </div>
          <div className="beauty-health__container-flex-1">
          <TwoProductTemplateTwo 
              titleOne = "Hair Shampoo Brush, HEETA Scalp Care Hair Brush with Soft Silicone (Black)"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61aQt6lRLvL._SL1500_.jpg"
              pathOne = ""
              priceOne = "12.97"
              titleTwo = "NYX PROFESSIONAL MAKEUP Mechanical Eye Liner Pencil, Black"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/51rSQChbyPL._SL1000_.jpg"
              pathTwo = ""
              priceTwo = "9.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "L'Oreal Paris Makeup Lash Paradise Mascara, Voluptuous Volume, Intense Length, Feathery Soft Full Lashes, No Flaking, No Smudging, No Clumping, Black, 0.25"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/51oObP0ZXXL._SL1000_.jpg"
              pathOne = ""
              priceOne = "14.59"
              titleTwo = "CeraVe Skin Renewing Night Cream | Niacinamide, Peptide Complex, and Hyaluronic Acid Moisturizer for Face | 1.7 Ounce"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/616%2B%2BQ7RuwL._SL1167_.jpg"
              pathTwo = ""
              priceTwo = "7.12"
            />
            <TwoProductTemplateTwo 
              titleOne = "INNERNEED Soft Handheld Silicone Facial Cleansing Brush, Mild Anti-Slip Face Exfoliating and Massage Scrubber Pad, Gentle Exfoliating, Removing Blackhead"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61XBT2FMGJL._SL1000_.jpg"
              pathOne = ""
              priceOne = "6.99"
              titleTwo = "Burt's Bees 100% Natural Moisturizing Lip Balm, Original Beeswax with Vitamin E & Peppermint Oil – 4 Tubes"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71V9BvmfSgL._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "10.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "Finishing Touch Flawless Women's Painless Hair Remover, Blush/Rose Gold"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/614QQgOQPrL._SL1500_.jpg"
              pathOne = ""
              priceOne = "8.87"
              titleTwo = "Philips Norelco MG3750 Multigroom All-In-One Series 3000, 13 attachment trimmer"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/91qmPJKT87L._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "25.95"
            />
            <TwoProductTemplateTwo 
              titleOne = "Avarelle Acne Pimple Patch (40 Count) Absorbing Hydrocolloid Spot Treatment with Tea Tree Oil, Calendula Oil and Cica, Certified Vegan, Cruelty Free"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/71GVAOppQhL._SL1280_.jpg"
              pathOne = ""
              priceOne = "5.65"
              titleTwo = "EltaMD UV Clear Facial Sunscreen Broad-Spectrum SPF 46 for Sensitive or Acne-Prone Skin, Oil-free, Dermatologist-Recommended Mineral-Based Zinc Oxide Formula"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61RGBs%2Baf6L._SL1296_.jpg"
              pathTwo = ""
              priceTwo = "12.08"
            />
            <TwoProductTemplateTwo 
              titleOne = "Dr. Squatch Men's Soap Variety Pack – Manly Scent Bar Soaps: Pine Tar, Cedar Citrus, Gold Moss – Handmade with Organic Oils in USA (3 Bars)"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/812e6FAvIBL._SL1350_.jpg"
              pathOne = ""
              priceOne = "16.99"
              titleTwo = "Mrs. Meyer’s Clean Day Liquid Hand Soap Refill, Basil, 33 fl oz"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/81AB2zpoNoL._AC_SL1500_.jpg"
              pathTwo = ""
              priceTwo = "10.29"
            />
            <TwoProductTemplateTwo 
              titleOne = "Gillette Fusion Manual Men’s Razor Blade Refills, 12 Count, Mens Razors / Blades"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81ZkNxsCa4L._SL1500_.jpg"
              pathOne = ""
              priceOne = "11.78"
              titleTwo = "Ear and Nose Hair Trimmer Clipper - 2019 Professional Painless Eyebrow and Facial Hair Trimmer for Men and Women, Battery-Operated, IPX7 Waterproof Dual"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71RnrdJlEsL._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "20.98"
            />
            <TwoProductTemplateTwo 
              titleOne = "Beetles 20 Pcs Gel Nail Polish Kit, Bare Collection Soak Off Nail Gel Polish Set Nude Glitter Pastel Pink Gel Nail Kit Peach Brown Natural Skin Tone Nail"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81auiIiGO9L._AC_SL1500_.jpg"
              pathOne = ""
              priceOne = "25.95"
              titleTwo = "BS-MALL Makeup Brushes Premium Synthetic Foundation Powder Concealers Eye Shadows Makeup 14 Pcs Brush Set, Rose Golden, 1 Count"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71A0g1MMFxL._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "30.99"
            />
            <TwoProductTemplateTwo 
              titleOne = "RoselynBoutique Jade Roller for Face and Gua Sha Set - Beauty Cosmetic Facial Skin Roller Massager Tool - Original Handcraft Natural Green Jade"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/61GRvzqIJaL._SL1372_.jpg"
              pathOne = ""
              priceOne = "9.99"
              titleTwo = "Philips Norelco OneBlade Replacement Blades, 1 count, QP210/80"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71hjkZheYlL._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "7.69"
            />
            <TwoProductTemplateTwo 
              titleOne = "Hair Scalp Massager Shampoo Brush, MAXSOFT Scalp Care Brush"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/51EbgIgofzL._SL1036_.jpg"
              pathOne = ""
              priceOne = "7.99"
              titleTwo = "Shower Brush with Soft and Stiff Bristles, Exfoliating Skin and A Soft Scrub, Double-sided Brush Head for Wet or Dry Brushing, Specially Long Wooden Handle"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/61qrVGArdxL._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "9.95"
            />
            <TwoProductTemplateTwo 
              titleOne = "NYX PROFESSIONAL MAKEUP Butter Gloss - Creme Brulee, Natural"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/51laB6ewuFL._SL1000_.jpg"
              pathOne = ""
              priceOne = "12.99"
              titleTwo = "Foot Pumice Stone for Feet Hard Skin Callus Remover and Scrubber (Pack of 4) (Blue)"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/71Of0tUd9CL._SL1200_.jpg"
              pathTwo = ""
              priceTwo = "9.69"
            />
            <TwoProductTemplateTwo 
              titleOne = "Softsoap Antibacterial Liquid Hand Soap, Fresh Citrus - 11.25 Fluid Ounce (6 Pack)"
              imageOne = "https://images-na.ssl-images-amazon.com/images/I/81JzaxRbPsL._SL1500_.jpg"
              pathOne = ""
              priceOne = "11.28"
              titleTwo = "Revlon Colorsilk Beautiful Color Permanent Hair Color with 3D Gel Technology & Keratin, 100% Gray Coverage Hair Dye, 03 Ultra Light Sun Blonde, 4.4 oz"
              imageTwo = "https://images-na.ssl-images-amazon.com/images/I/91PNg9JwMlL._SL1500_.jpg"
              pathTwo = ""
              priceTwo = "8.04"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeautyHealth;
