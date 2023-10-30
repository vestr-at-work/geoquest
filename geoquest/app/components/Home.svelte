<!-- <page>
    <actionBar title="Home" />
    <gridLayout>
        <label class="info">
            <formattedString>
                <span class="fas" text="&#xf135;" />
                <span text=" {message}" />
            </formattedString>
        </label>
    </gridLayout>
</page>

<script lang="ts">
    let message: string = "Blank Svelte Native App"
</script>

<style>
    .info .fas {
        color: #3A53FF;
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style> -->
<page actionBarHidden={true}>
    <tabs bind:selectedIndex={selectedTab}>

        <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
        <tabStrip>
            <tabStripItem>
                <image src="font://&#xf279;" class="far" />
            </tabStripItem>
            <tabStripItem>
                <image src="font://&#xf059;" class="far" />
            </tabStripItem>
            <tabStripItem>
                <image src="font://&#xf007;" class="far" />
            </tabStripItem>
        </tabStrip>

        <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
        <tabContentItem>
            <gridLayout>
                <label text="Map Page" class="h2 text-center" />
            </gridLayout>
        </tabContentItem>
        <tabContentItem>
            <gridLayout>
                <label text="Quests Page" class="h2 text-center" />
            </gridLayout>
        </tabContentItem>
        <tabContentItem>
            <gridLayout>
                <label text="Account Page" class="h2 text-center" />
            </gridLayout>
        </tabContentItem>

    </tabs>
</page>

<script lang="ts">
    let selectedTab: number;
</script>
