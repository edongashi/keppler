import FilesTreeFile from '@/components/files-tree-file'
export default
{
    name: 'files-tree-folder',

    components:
    {
        FilesTreeFile
    },

    props:
    {
        depth: { type: Number, default: 0 },
        content: { type: Object }
    },

    created()
    {
    },

    methods:
    {
    }
}