import axios from 'axios'

export const itemsAPI = {
    get() {
        return axios.get('/api/items')
    },
    add(name: string) {
        return axios.post('/api/items', {name})
    },
    del(id: string) {
        return axios.delete(`/api/items/${id}`)
    }
}
