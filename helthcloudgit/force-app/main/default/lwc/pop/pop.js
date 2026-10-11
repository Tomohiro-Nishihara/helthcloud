import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    handleClick() {
        // 子 → 親へ送るデータ
        const detail = { message: 'Hello from Child!' };

        this.dispatchEvent(
            new CustomEvent('childclick', { detail })
        );
    }
}