export interface NodeMappedBuffer {
    create(): void,
    open(): void,
    read(): Buffer | undefined,
    write(buffer: Buffer): void,
    close(): void
}