import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { GITHUB_STABLE_API_STORE, GITHUB_STABLE_API_DROID } from "../constants";

const worker = (function () {
	const networkMap = new Map();

	// Makes sure there is only one network call to API
	// Everyone else wait for promise
	function _getDataFromGithub(name, url) {
		if (networkMap.has(name)) {
			return networkMap.get(name);
		}

		const call = axios
			.get(url)
			.then((value) => {
				networkMap.delete(name);
				return Promise.resolve(value);
			})
			.catch((reason) => {
				networkMap.delete(name);
				return Promise.reject(reason);
			});

		networkMap.set(name, call);

		return call;
	}

	const dataMap = new Map();

	const now = new Date().getTime();

	// Makes sure there is only one mutation
	// Everyone else wait for promise
	function _getData(store, name, type, url) {
		if (dataMap.has(name)) {
			return dataMap.get(name);
		}

		const promise = _getDataFromGithub(name, url)
			.then(({ data }) => {
				const object = {
					updated: now,
					data,
				};
				store.commit({
					type,
					object,
				});
				dataMap.delete(name);
				return Promise.resolve();
			})
			.catch((reason) => {
				const object = {
					updated: null,
					data: null,
				};
				store.commit({
					type,
					object,
				});
				dataMap.delete(name);
				return Promise.reject(reason);
			});

		dataMap.set(name, promise);

		return promise;
	}

	return {
		getStoreData(store, name) {
			return new Promise((resolve, reject) => {
				_getData(store, name, "setStoreReleaseData", GITHUB_STABLE_API_STORE)
					.then(() => {
						resolve(store.state.astore);
					})
					.catch((reason) => {
						reject(reason);
					});
			});
		},
		getDroidData(store, name) {
			return new Promise((resolve, reject) => {
				_getData(store, name, "setDroidReleaseData", GITHUB_STABLE_API_DROID)
					.then(() => {
						resolve(store.state.adroid);
					})
					.catch((reason) => {
						reject(reason);
					});
			});
		},
	};
})();

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		astore: {
			updated: null,
			data: null,
		},
		adroid: {
			updated: null,
			data: null,
		},
	},
	mutations: {
		setStoreReleaseData(state, { object }) {
			// eslint-disable-next-line no-param-reassign
			state.astore = object;
		},
		setDroidReleaseData(state, { object }) {
			// eslint-disable-next-line no-param-reassign
			state.adroid = object;
		},
	},
	actions: {
		getStoreReleaseData() {
			const { updated } = this.state.astore;
			const now = new Date().getTime();

			if (updated != null && now - updated <= 60 * 60 * 24 * 1000) {
				return Promise.resolve(this.state.astore);
			}

			return worker.getStoreData(this, "astore");
		},
		getDroidReleaseData() {
			const { updated } = this.state.adroid;
			const now = new Date().getTime();

			if (updated != null && now - updated <= 60 * 60 * 24 * 1000) {
				return Promise.resolve(this.state.adroid);
			}

			return worker.getDroidData(this, "adroid");
		},
	},
});
