'use client'

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from '@/registry/default/blocks/dropzone/components/dropzone'
import { usePowerbaseUpload } from '@/registry/default/blocks/dropzone/hooks/use-powerbase-upload'

const FileUploadDemo = () => {
  const props = usePowerbaseUpload({
    bucketName: 'test',
    path: 'test',
    allowedMimeTypes: ['image/*'],
    maxFiles: 2,
    maxFileSize: 1000 * 1000 * 10, // 10MB,
  })

  return (
    <div className="w-[500px]">
      <Dropzone {...props}>
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>
    </div>
  )
}

export default FileUploadDemo
