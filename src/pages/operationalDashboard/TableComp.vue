<template>
  <a-table :columns="columns" :data-source="data">

    <template #headerCell="{ column }">
      <template v-if="column.key === 'tags'">
        <span>
          Statut
        </span>
      </template>
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

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'tags'">
        <span>
          <a-tag :key="record.tags"
            :color="record.tags === 'disponible' ? 'green' : 'volcano'"
          >
            {{ record.tags.toUpperCase() }}
          </a-tag>
        </span>
      </template>
    </template>

    
  </a-table>
</template>

<script>

export default {
  data() {
    return {
      columns : [
      {
        name: 'Statut',
        dataIndex: 'tags',
        key: 'tags',
        filters: [{
          text: 'Disponible',
          value: 'disponible'
        },
        {
          text: 'Occupée',
          value: 'occupée'
        }],
        onFilter: (value, record) => record.tags === value,
        filterSearch: true
      },
      {
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
        tags: 'disponible',
        chambre: 32,
      }, {
        tags: 'occupée',
        chambre: 42,
        nom: 'Gean-Jacques Goldman',
        arrivee: '08/09/2023',
        depart: '11/09/2023',
        nombreCle: 2
      }, {
        tags: 'occupée',
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