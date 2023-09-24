

export default interface InterfaceLocation {
    provinces: { id: string; name: string }[];
    regencies: { id: string; name: string }[];
    districts: { id: string; name: string }[];
    villages: { id: string; name: string }[];
    selectedProvince: string;
    selectedRegency: string;
    selectedDistrict: string;
    selectedVillage: string;
}