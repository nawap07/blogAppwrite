import React from 'react'
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form"

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image", "advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "serchreplace", "visaulblocks", "code", "fullscreen", "insertdatetime", "media",
                                "table", "code", "help", "wordcount", "anchor",
                            ],
                            toolbar: " undo redo | blocks  |  image | bold italic underline |  alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformet| help",
                            content_style: "body {font-family :Helvetica, Arial , sans-serif ; font-size :14px}"
                        }}
                        onEditorChange={onChange}
                    />
                )}

            />
        </div>
    )
}

