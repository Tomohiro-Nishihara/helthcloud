import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    handleChildClick(event) {
        console.log('Received:', event.detail.message);
        this.receivedMessage = event.detail.message;
    }
}