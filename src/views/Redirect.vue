<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { githubLogin } from '@/api/user';
import { setExpire, setToken } from '@/utils/auth.ts';

const router = useRouter();
const route = useRoute();

function handleGithubAuthorized() {
  const { code, state } = route.query;

  if (typeof code !== 'string' || typeof state !== 'string') {
    router.replace('home');
    return;
  }

  githubLogin<{
    expire: number;
    token: string;
  }>({
    code,
    state,
  }).then((res) => {
    const { expire, token } = res;

    setExpire(expire);
    setToken(token);

    router.replace('home');
  });
}

onMounted(handleGithubAuthorized);
</script>
