<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
 {
    avatar: 'https://avatars.githubusercontent.com/u/16130308?v=4',
    name: '小符',
    title: 'Blockchain Developer/Gopher/React',
    links: [
      { icon: 'github', link: 'https://github.com/smallfu6' },
      { icon: 'twitter', link: 'https://x.com/smallfu666' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/69753389?v=4',
    name: 'pseudoyu',
    title: 'Full-stack & Smart Contract Developer',
    links: [
      { icon: 'github', link: 'https://github.com/pseudoyu' },
      { icon: 'twitter', link: 'https://x.com/pseudo_yu' }
    ]
  },
]
</script>

# 社区大使们

Say hello 👋 to our awesome Ambassador 🧑‍💻.
<VPTeamMembers size="small" :members="members" />
