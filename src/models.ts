'use strict';

interface Kijelzo {
	mac_cim: string;
	kijelez: string;
}

export class PosKijelzo implements Kijelzo {
	private data: { mac_cim: string; kijelez: string };
	constructor(payload: string) {
		var data = JSON.parse(payload);
		if (!data.mac_cim || !data.kijelez) {
			throw new Error('Invalid message payload received: ' + payload);
		}
		this.data = data;
	}
	get mac_cim(): string {
		return this.data.mac_cim;
	}
	get kijelez(): string {
		return this.data.kijelez;
	}
}
