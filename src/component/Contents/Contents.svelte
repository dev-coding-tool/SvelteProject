<script>
    import { page } from '$app/stores';
    import { Container, TabContent, TabPane } from '@sveltestrap/sveltestrap';
    import src1 from '~/lib/images/image_1.jpg';
    import src2 from '~/lib/images/image_2.jpg';
   
    const pageParam = $page.params;
    let alt = 'image';
    let hasSlug = pageParam.hasOwnProperty('slug');
    let activeTab = 'sequence';
</script>
<div class="container_contents py-3">
    {#if hasSlug}
        <div class="container_custom">
            <p class="text">cat</p>
            <img class="_default" src={src1} alt={alt}>
        </div>
    {:else}
        <Container fluid>
            <h5>{activeTab}</h5>
            <TabContent on:tab={(e) => (activeTab = e.detail)}>
                <TabPane tabId="Cat1" tab="Cat1" active>
                    <img class="_default" src={src1} alt={alt} />
                </TabPane>
                <TabPane tabId="Cat2" tab="Cat2" >
                    <img class="_default" src={src2} alt={alt} />
                </TabPane>
            </TabContent>
        </Container>
    {/if}
</div>

<style>
</style>