export default class SliderCervice {

  async getResourse() {
    const res = await fetch('db.json')

    if (!res.ok) {
      throw new Error(`Could not fetch` +
        `, received ${res.status}`);
    }
    return await res.json();
  }
  async getSliderData() {
    return await this.getResourse();
  }
   
}