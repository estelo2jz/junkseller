import React from 'react'
import  Footer  from '../footer';


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Category</Footer.Title>
                    <Footer.Link href="#">Electronics</Footer.Link>
                    <Footer.Link href="#">Computers</Footer.Link>
                    <Footer.Link href="#">Clothing</Footer.Link>
                    <Footer.Link href="#">Jewelry</Footer.Link>
                    </Footer.Column>
                <Footer.Column>
                 <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#">Facebook</Footer.Link>
                    <Footer.Link href="#">Instagram</Footer.Link>
                    <Footer.Link href="#">Youtube</Footer.Link>
                    <Footer.Link href="#">Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}