import axios from 'axios'

export const getReq = async(url, params) => {
	try {
		const res = await axios.get(url)
		return res
	} catch (e) {
		console.log(e);
	}
}
