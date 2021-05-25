// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiPisos: 'https://apidev.holapisos.com/es/api/node/inmuebles?page[limit]=32&page[offset]=0&sort[weight][path]=field_inmu_peso_orde&sort[weight][direction]=DESC&sort[relevancy][path]=relevancy&sort[relevancy][direction]=DESC&fields[node--inmuebles]=field_inmu_imag_arra,field_inmu_prec,field_inmu_nume_habi,field_inmu_refe,field_inmu_pobl,field_inmu_area_cons,field_inmu_tipo_sin_agru,field_inmu_tipo_via,field_inmu_nomb_call',
  startUrl: 'https://apidev.holapisos.com/es/api/node/inmuebles?page%5Boffset%5D=0&page%5Blimit%5D=32&sort%5Bweight%5D%5Bpath%5D=field_inmu_peso_orde&sort%5Bweight%5D%5Bdirection%5D=DESC&sort%5Brelevancy%5D%5Bpath%5D=relevancy&sort%5Brelevancy%5D%5Bdirection%5D=DESC&fields%5Bnode--inmuebles%5D=field_inmu_imag_arra%2Cfield_inmu_prec%2Cfield_inmu_nume_habi%2Cfield_inmu_refe%2Cfield_inmu_pobl%2Cfield_inmu_area_cons%2Cfield_inmu_tipo_sin_agru%2Cfield_inmu_tipo_via%2Cfield_inmu_nomb_call'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
