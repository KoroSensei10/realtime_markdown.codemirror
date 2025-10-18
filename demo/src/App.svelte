<script lang="ts">
  import Editor from './lib/Editor.svelte';
</script>

<svelte:head>
  <title>Real-time Markdown Demo</title>
  <meta name="description" content="A demo of the real-time Markdown editor using CodeMirror and Svelte." />
</svelte:head>

<main class="w-screen h-screen bg-neutral-700 text-neutral-200 flex flex-col p-8 gap-4">
  <h1 class="text-3xl w-fit px-4 py-2 bg-neutral-800 font-bold rounded-2xl shadow-lg">
    Real-time Markdown Demo
  </h1>
  <Editor />
</main>
