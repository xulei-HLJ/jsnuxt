const SliderModel = require('../db/models/slider');

class SliderService {
  async getSliderData () {
  	return await SliderModel.findAll({
  		where: { status: 1 },
  		attributes: {
  			exclude: ['cid', 'createdAt', 'updatedAt']
  		}
  	});
  }
}

module.exports = new SliderService();