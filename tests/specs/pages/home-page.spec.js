import { describe, expect } from 'vitest'
import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import HomePage from '@/pages/HomePage.vue'

describe('HomePage.vue', () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)

  it('renders properly', () => {
    const wrapper = shallowMount(HomePage, { localVue })
    expect(wrapper.vm).toBeTruthy()
  })

  it('redirects to "Buy Books" page when BliButton is clicked', async () => {
    const router = new VueRouter({
      routes: [
        { path: '/', name: 'home' },
        { path: '/buy-books', name: 'buyBooks', }
      ],
    })

    const wrapper = shallowMount(HomePage, {
      localVue,
      router
    })

    await wrapper.find('[to="/buy-books"]').trigger('click')
    await wrapper.vm.$router.push('/buy-books')
    expect(wrapper.vm.$route.name).toBe('buyBooks')
  })
})
