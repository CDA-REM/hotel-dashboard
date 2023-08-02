<template>
    <h2></h2>
    <a-table :dataSource="dataSource" :columns="columns" style="width:75%"/>
  </template>
  <script>
    export default {
      name: 'tableComp',
      data() {
        return {
          dataSource: [
            {
              statut: '1',
              chambre: '102',
              nomClient: 'Jean-Jacques Goldman',
              arrivee: '08/09/2023',
              depart: '10/09/2023',
              nombreCle: 2
            },
            {
              key: '2',
              name: 'John',
              age: 42,
              address: '10 Downing Street',
            },
          ],
  
          columns: [
            {
              title: 'Statut',
              dataIndex: 'statut',
              key: 'statut',
            },
            {
              title: 'Chambre',
              dataIndex: 'chambre',
              key: 'chambre',
            },
            {
              title: 'Nom du client',
              dataIndex: 'nomClient',
              key: 'nomClient',
            },
            {
              title: 'Arrivée',
              dataIndex: 'arrivee',
              key: 'arrivee',
            },
            {
              title: 'Départ',
              dataIndex: 'depart',
              key: 'depart',
            },
            {
              title: 'Nombre de clés',
              dataIndex: 'nombreCle',
              key: 'nombreCle',
            },
            
          ],
        };
      },
    };
  </script>