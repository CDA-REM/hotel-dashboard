<template>
  <a-table :columns="columns" :data-source="data" @change="handleTableChange">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'statut'">
        <span>
          <a-tag
            v-for="statut in record.statut"
            :key="statut"
            :color="statut === 'libre' ? 'green' : 'volcano'"
          >
            {{ statut.toUpperCase() }}
          </a-tag>
        </span>
      </template>
    </template>

    <template #headerCell="{ column }">
      <template v-if="column.key === 'chambre'">
        <span>
          Chambre
        </span>
      </template>
      <template v-else-if="column.key === 'nom'">
        <span>
          Nom
        </span>
      </template>
      <template v-else-if="column.key === 'arrivee'">
        <span>
          Arrivée
        </span>
      </template>
      <template v-else-if="column.key === 'depart'">
        <span>
          Départ
        </span>
      </template>
    </template>

    
  </a-table>
</template>

<script>

export default {
  data() {
    return {
      columns : [{
        name: 'Statut',
        dataIndex: 'statut',
        key: 'statut'
      }, {
        title: 'Chambre',
        dataIndex: 'chambre',
        key: 'chambre',
      }, {
        title: 'Nom',
        dataIndex: 'nom',
        key: 'nom'
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
        sorter: (a, b) => a.depart.localeCompare(b.depart)
      },
      {
        title: 'Nombre de clés',
        dataIndex: 'nombreCle',
        key: 'nombreCle',
      }],
      data : [{
        statut: ['libre'],
        chambre: 32,
        nom: 'Jean-Jacques Goldman',
        arrivee: '08/09/2023',
        depart: '10/09/2023',
        nombreCle: 2
      }, {
        statut: ['occupée'],
        chambre: 42,
        nom: 'Gean-Jacques Goldman',
        arrivee: '08/09/2023',
        depart: '11/09/2023',
        nombreCle: 2
      }, {
        statut: ['libre'],
        chambre: 32,
        nom: 'Jean-Jacques Goldman',
        arrivee: '08/09/2023',
        depart: '10/09/2023',
        nombreCle: 2
      }]
      }
    },
}
</script>