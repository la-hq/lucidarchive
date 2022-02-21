<script lang="ts">
    import type { Album, Covers } from "../global";

    export let album: Album;
    export let coverKey: keyof Covers;
</script>

<div class="tile">
    <img src={album.covers[coverKey]} alt="" />
    <div class="info">
        <h6>{album.date}</h6>
        <h5>{album.title}</h5>
        <h6>{album.pseudonym}</h6>
    </div>
</div>

<style lang="scss">
    .tile {
        position: relative;
        width: calc(100px + 5vw);
        padding-bottom: calc(100px + 5vw);

        overflow: hidden;

        & > * {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        & > img {
            object-fit: cover;
            object-position: 50% 50%;
        }

        & > .info {
            background-color: rgba(0, 0, 0, 0.75);

            transition: opacity 100ms linear;
            opacity: 0;

            text-align: center;
            padding: 5%;
            text-transform: none;

            &:hover {
                opacity: 1;
            }
        }
    }
</style>
