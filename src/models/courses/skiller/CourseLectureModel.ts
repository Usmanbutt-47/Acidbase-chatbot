export const dataForServer = (values:any) => {

    return {
        title: values?.title  || undefined,

        courseId: Number(values?.courseId)  || undefined,

        description: values?.description  || undefined,

        // lectureAttachmentId: Number(values?.lectureAttachmentId) || undefined,

        videoLink: values?.videoLink || '',

        duration: values?.duration || undefined,

        lectureAttachments: values?.lectureAttachments || undefined

    }
}